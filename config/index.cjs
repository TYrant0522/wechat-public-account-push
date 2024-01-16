/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  //USE_PASSAGE: 'wechat-test',
  USE_PASSAGE: 'push-deer',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU27809TMRz9RtwwjoTvVDCXTSeReAbQeazrbxFC',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '1998', date: '05-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '1998', date: '07-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-25',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-08-08' },
        // 结婚纪念日
        //{ keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU27806TDqGOd0pDGeBTd9zeshspX95vCkiZXmQS',
    }
  ],

}
/*
  "APP_ID":"wx02c2e4bb67b58445",
  "APP_SECRET":"cedd2dbf6addf1517ad1400a9e5cbd51",
  "IS_SHOW_COLOR":true,
  "CALLBACK_TEMPLATE_ID":"spyy8b6dMOghK-muOiHefGGvN7GWFkhaqBlTGNq9OHU",
  "CALLBACK_USERS":[{
    "name":"自己",
    "id":"oqB1Y6mY9MzM7xIEUK1UknELxZ3s"
  }],
  "USERS":[{
    "name":"宝宝",
    "id":"oqB1Y6lhPGMg1147sLeBSW43gH3M",
    "useTemplateId":"7QaBkXGhD2rtdF72lGgnITJeV0B1pb1t14lZbZE7YrA",
    "province":"上海",
    "city":"上海",
    "horoscopeDate":"07-17",
    "horoscopeDateType":"今日",
    "openUrl":"https://shuangxunian.github.io/",
    "festivals":[{
      "type":"生日",
      "name":"亲亲宝宝老婆",
      "date":"07-17",
      "year":"1998"
    },{
      "type":"节日",
      "name":"相识纪念日",
      "date":"04-25",
      "year":"2023"}],
    "customizedDateList":[{
      "keyword":"love_day",
      "date":"2023-08-08"
    }]}],
  "SWITCH":{
    "weather":true,
    "holidaytts":true,
    "CIBA":true,
    "oneTalk":false,
    "earthyLoveWords":false,
    "momentCopyrighting":false,
    "poisonChickenSoup":false,
    "poetry":false,
    "horoscope":false,
    "birthdayMessage":true
  }
}
*/
module.exports = USER_CONFIG
