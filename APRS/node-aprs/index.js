const TYPE = {
  REPEATER_REQUEST: "{{R      :"
};

class APRS {
  constructor(callsign) {
    this.callsign = callsign.toUpperCase();
  }

  sendPacket(data) {
    const header = `${this.callsign}>APZ420,WIDE1-1,WIDE2-1:`;
    const packet = header + data;
    console.log("sent:", packet);
  }

  getRepeaters(coords) {
    this.sendPacket(TYPE.REPEATER_REQUEST + coords);
    // return a promise that thens when a response is received
  }
}

const aprs = new APRS("KN4VJS");
aprs.getRepeaters("N34W086");
