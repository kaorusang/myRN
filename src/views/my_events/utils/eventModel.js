import {
  Model
} from '@ctrip/moles-cui';

var eventModel = {
  GetEventList: Model.createModel({
    url: 'http://m.ctrip.com/restapi/soa2/10307/GetEventList',
    method: 'POST',
    param: {
      "DistrictId": 0,
      "DepartureId": 0,
      "StartDate": '',
      "EndDate": '',
      "IsOnlyStarted": false,
      "AgeRangeList": [],
      "EventTagIdList": [],
      "Gender": 0,
      "Keyword": '',
      "StartIndex": 0,
      "ReturnCount": 20,
      "SortType": 1,
      "head": {
        "cid": "09031081410251560227",
        "ctok": "",
        "cver": "1.0",
        "lang": "01",
        "sid": "8888",
        "syscode": "09",
        "auth": null,
        "extension": [{
          "name": "protocal",
          "value": "http"
        }]
      },
    },
  }),

}


module.exports = eventModel;