/*module.exports = function(RED) {
    function ams_decoder_aidon(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {*/
var msg = new Object()
msg.payload = "7ea0d24108831382d6e6e7000f40000000000109020209060101000281ff0a0b4149444f4e5f5630303031020209060000600100ff0a1037333539393932393035363032303139020209060000600107ff0a0436353135020309060100010700ff060000000002020f00161b020309060100020700ff060000047a02020f00161b020309060100030700ff060000000002020f00161d020309060100040700ff06000000e202020f00161d0203090601001f0700ff10ffcd02020fff1621020309060100200700ff12098302020fff16239f407e"

var Obis_list = new Object()
msg.payload = msg.payload.toUpperCase(); // Fjerner risiko for små og store bokstaver i motatt string

if (msg.payload.includes("020209060101000281FF0A0B")){
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("020209060101000281FF0A0B")+24,22))
    }

if (msg.payload.includes("020209060000600100FF0A10")){
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("020209060000600100FF0A10")+24,32))
    }

if (msg.payload.includes("020209060000600107FF0A04")){
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("020209060000600107FF0A04")+24,8))
    }

if (msg.payload.includes("020309060100010700FF06")){
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100010700FF06")+22,8))
    }

if (msg.payload.includes("020309060100020700FF06")){
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100020700FF06")+22,8))
    }

if (msg.payload.includes("020309060100030700FF06")){
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100030700FF06")+22,8))
    }

if (msg.payload.includes("020309060100040700FF06")){
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100040700FF06")+22,8))
    }

if (msg.payload.includes("0203090601001F0700FF10")){
    Obis_list.curr_L1 = hex_to_dec_signed(msg.payload.substr(msg.payload.indexOf("0203090601001F0700FF10")+22,4))
    }

if (msg.payload.includes("020309060100330700FF10")){
    Obis_list.curr_L2 = hex_to_dec_signed(msg.payload.substr(msg.payload.indexOf("020309060100330700FF10")+22,4))
    }

if (msg.payload.includes("020309060100470700FF10")){
    Obis_list.curr_L3 = hex_to_dec_signed(msg.payload.substr(msg.payload.indexOf("020309060100470700FF10")+22,4))  
    }

if (msg.payload.includes("020309060100200700FF12")){
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100200700FF12")+22,4))
    }

if (msg.payload.includes("020309060100340700FF12")){
    Obis_list.volt_L2 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100340700FF12")+22,4))
    }

if (msg.payload.includes("020309060100480700FF12")){
    Obis_list.volt_L3 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100480700FF12")+22,4))
    }   

if (msg.payload.includes("020209060000010000FF090C")){
    var year = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+24,4))
    var month = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+28,2))
    var day = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+30,2))
    var hour = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+34,2))
    var min = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+36,2))
    var sek = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020209060000010000FF090C")+38,2))
    Obis_list.date_time = (year + " " + month + " " + day + " " + hour + ":" + min + ":" + sek)
    }
if (msg.payload.includes("020309060100010800FF06")){
    Obis_list.act_energy_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100010800FF06")+22,8))
    }

if (msg.payload.includes("020309060100020800FF06")){
    Obis_list.act_energy_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100020800FF06")+22,8))
    }
if (msg.payload.includes("020309060100030800FF06")){
    Obis_list.react_energy_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100030800FF06")+22,8))
    }
if (msg.payload.includes("020309060100040800FF06")){
    Obis_list.react_energy_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("020309060100040800FF06")+22,8))
     }                        
function hex_to_dec_signed(str1)
    {
        var hex = str1
        var dec = parseInt(hex, 16)
        if ((dec & 0x8000) > 0) {
            dec = dec - 0x10000;
         }
        return dec;
    }

    function hex_to_dec(str1)
    {
        var hex = str1
        var dec = parseInt(hex, 16)
        return dec;
    }

function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
msg.payload = Obis_list
if (Object.getOwnPropertyNames(Obis_list).length === 0){
    node.error("Data is not compatible, Check string from AMS-meter", msg)
}
else {
console.log(msg.payload)
}
/*});
}

RED.nodes.registerType("AMS Decoder Aidon",ams_decoder_aidon);
}*/
