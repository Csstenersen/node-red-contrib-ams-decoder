module.exports = function(RED) {
    function ams_decoder_kamstrup(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {


var Obis_list = new Object()
msg.payload = msg.payload.toUpperCase(); // Fjerner risiko for små og store bokstaver i motatt string

if (msg.payload.includes("02230A0E")){
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("02230A0E")+8,28))
    }

if (msg.payload.includes("02190A0E")){
     Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("02190A0E")+8,28))
    }

if (msg.payload.includes("020F0A0E")){
        Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("020F0A0E")+8,28))
        }    
if (msg.payload.includes("09060101000005FF0A10")){
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("09060101000005FF0A10")+20,32))
    }

if (msg.payload.includes("09060101600101FF0A12")){
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(msg.payload.indexOf("09060101600101FF0A12")+20,36))
    }

if (msg.payload.includes("09060101010700FF06")){
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101010700FF06")+18,8))
    }

if (msg.payload.includes("09060101020700FF06")){
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101020700FF06")+18,8))
    }

if (msg.payload.includes("09060101030700FF06")){
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101030700FF06")+18,8))
    }

if (msg.payload.includes("09060101040700FF06")){
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101040700FF06")+18,8))
    }

if (msg.payload.includes("090601011F0700FF06")){
    Obis_list.curr_L1 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("090601011F0700FF06")+18,8))
    }

if (msg.payload.includes("09060101330700FF06")){
    Obis_list.curr_L2 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101330700FF06")+18,8))
     }

if (msg.payload.includes("09060101470700FF06")){
    Obis_list.curr_L3 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101470700FF06")+18,8))
    }

if (msg.payload.includes("09060101200700FF12")){
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101200700FF12")+18,4))
    }

if (msg.payload.includes("09060101340700FF12")){
    Obis_list.volt_L2 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101340700FF12")+18,4))
    }

if (msg.payload.includes("09060101480700FF12")){
    Obis_list.volt_L3 = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101480700FF12")+18,4))
    }   

if (msg.payload.includes("09060001010000FF090C")){
    var year = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+20,4))
    var month = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+24,2))
    var day = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+26,2))
    var hour = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+30,2))
    var min = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+32,2))
    var sek = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060001010000FF090C")+34,2))
    Obis_list.date_time = (year + " " + month + " " + day + " " + hour + ":" + min + ":" + sek)
    }
if (msg.payload.includes("09060101010800FF06")){
    Obis_list.act_energy_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101010800FF06")+18,8))
    }

if (msg.payload.includes("09060101020800FF06")){
    Obis_list.act_energy_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101020800FF06")+18,8))
    }
if (msg.payload.includes("09060101030800FF06")){
    Obis_list.react_energy_pos = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101030800FF06")+18,8))
    }
if (msg.payload.includes("09060101040800FF06")){
    Obis_list.react_energy_neg = hex_to_dec(msg.payload.substr(msg.payload.indexOf("09060101040800FF06")+18,8))
     }
                           
function hex_to_dec(str1)
    {
        var hex = str1
        var dec = parseInt(hex,16)
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
node.send(msg)
}
});
}

RED.nodes.registerType("AMS Decoder Kamstrup",ams_decoder_kamstrup);
}
