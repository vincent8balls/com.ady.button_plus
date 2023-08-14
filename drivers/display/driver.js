'use strict';

const { Driver } = require('homey');

class DisplayDriver extends Driver
{

    /**
     * onInit is called when the driver is initialized.
     */
    async onInit()
    {
        this.log('DisplayDriver has been initialized');
    }

    /**
     * onPairListDevices is called when a user is adding a device
     * and the 'list_devices' view is called.
     * This should return an array with the data of devices that are available for pairing.
     */
    async onPairListDevices()
    {
        return [
            // Example device data, note that `store` is optional
            {
                name: 'Panel 3',
                data:
                {
                    connector: 3,
                },
                store:
                {
                    address: '127.0.0.1',
                },
            },
        ];
    }

}

module.exports = DisplayDriver;
