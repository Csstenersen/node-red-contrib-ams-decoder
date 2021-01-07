module.exports = function(RED) {
    function ams_decoder_kaifa(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {


var Obis_list = new Object()

msg.payload = msg.payload.toUpperCase(); // Fjerner risiko for små og store bokstaver i motatt string
index = msg.payload.indexOf("FF800000")+8 // finner index til info om hvor mange objekter meldingen inneholder
elements = hex_to_dec(msg.payload.substr((index+2),2)) // Leser av antall elementer i motatt data

if (elements == 1){ett_element()}
if (elements == 9){ni_elementer()}
if (elements == 13){tretten_elementer()}
if (elements == 14){fjorten_elementer()}
if (elements == 18){atten_elementer()}

function ett_element() {
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(index+6,8))
}
function ni_elementer(){
    index = index + 6
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(index,8))
}
function tretten_elementer(){
    index = index + 6
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L2 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L3 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L2 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L3 = hex_to_dec(msg.payload.substr(index,8))
}
function fjorten_elementer(){
    index = index + 6
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 12
    var year = hex_to_dec(msg.payload.substr(index,4))
    index = index + 4
    var month = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var day = hex_to_dec(msg.payload.substr(index,2))
    index = index + 4
    var hour = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var min = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var sek = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    Obis_list.date_time = (year + " " + month + " " + day + " " + hour + ":" + min + ":" + sek)
    index = index + 10
    Obis_list.act_energy_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_energy_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_energy_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_energy_neg = hex_to_dec(msg.payload.substr(index,8))
}
function atten_elementer(){
    index = index + 6
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.obis_list_version = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_ID = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    l = hex_to_dec(msg.payload.substr(index,2)) * 2
    Obis_list.meter_model = hex_to_ascii(msg.payload.substr(index + 2,l))
    index = index + 4 + l
    Obis_list.act_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_pow_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L2 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.curr_L3 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L1 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L2 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.volt_L3 = hex_to_dec(msg.payload.substr(index,8))
    index = index + 12
    var year = hex_to_dec(msg.payload.substr(index,4))
    index = index + 4
    var month = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var day = hex_to_dec(msg.payload.substr(index,2))
    index = index + 4
    var hour = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var min = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    var sek = hex_to_dec(msg.payload.substr(index,2))
    index = index + 2
    Obis_list.date_time = (year + " " + month + " " + day + " " + hour + ":" + min + ":" + sek)
    index = index + 10
    Obis_list.act_energy_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.act_energy_neg = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_energy_pos = hex_to_dec(msg.payload.substr(index,8))
    index = index + 10
    Obis_list.react_energy_neg = hex_to_dec(msg.payload.substr(index,8))
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
RED.nodes.registerType("AMS Decoder Kaifa",ams_decoder_kaifa);
}
