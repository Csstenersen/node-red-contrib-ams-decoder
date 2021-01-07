# Node Red AMS Decoder
A Node-Red Node for decoding norwegian AMS energy meters.</p>

## Compability
The node`s are testet with Aidon and Kamstrup meters.</p>
includes Beta Node for Kaifa meters.

# Installation
Go to your Node-RED user folder (e.g. ~/.node-red) and run:
```
sudo npm i node-red-contrib-ams-decoder
```

# Usage

The node expects a `string` from `msg.payload́` containing the whole message  from the AMS energy meter and ouputs  the  following:


```
msg.payload.obis_list_version
msg.payload.meter_ID
msg.payload.meter_model
msg.payload.act_pow_pos
msg.payload.act_pow_neg
msg.payload.react_pow_pos
msg.payload.react_pow_neg
msg.payload.curr_L1
msg.payload.curr_L2
msg.payload.curr_L3
msg.payload.volt_L1
msg.payload.volt_L2
msg.payload.volt_L3
msg.payload.date_time
msg.payload.act_energy_pos
msg.payload.act_energy_neg
msg.payload.react_energy_pos
msg.payload.react_energy_neg

```


# Example

Fetch the message from the ams energy meter trough a USB-serial port by using the `serialport` node. </p>
To get the serial port node you can install:</p>
````
npm i node-red-node-serialport
````
These settings in the serialport node seems to work fine:</p>
![example1](https://raw.githubusercontent.com/Csstenersen/ams_decoder/master/png/example1.png)

from the ouput on the serial node use a `function` node to convert the binary buffer to `String`.
The function node can contain something like:

```javascript
msg.payload = msg.payload.toString('hex');
return msg;
```
Then pass the output from the `function` node to the `input` of the `ams_decoder` to decode the ams message.</p>
![example2](https://raw.githubusercontent.com/Csstenersen/ams_decoder/master/png/example2.png)

Use the output as you like with the `msg.payload` properties as listet above

# HAN interface info list info

The values are in raw format as described in the descriptions below:

## Aidon: 
https://www.nek.no/wp-content/uploads/2018/11/Aidon-HAN-Interface-Description-v10A-ID-34331.pdf</p>

## Kamstrup: 
https://www.nek.no/wp-content/uploads/2018/10/Kamstrup-HAN-NVE-interface-description_rev_3_1.pdf

## Kaifa: 
https://www.nek.no/wp-content/uploads/2018/11/Kaifa-KFM_001.pdf

# Version log
1.0.6: Includet beta node for Kaifa reader</p>
1.1.0: changed output type from `Class` to `Object`, Included function to change input string to uppercase.</p>
1.1.1: Minor bug fix in kamstrup node regarding time/date

1.1.3 Bug fix with Aidon node thath caused current to display wrong when producing energy to the grid. 