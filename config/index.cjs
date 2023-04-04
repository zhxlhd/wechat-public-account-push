/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '广东',
  CITY: '深圳',
  USERS: [
    {
      // 想要发送的人的名字
      name: '张同学小朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pr7S3LiKhMfY580blldlbVCW8QP1UOmHNqZ-7jgr89A',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '你的农历', year: '1991', date: '03-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '你的阳历', year: '1991', date: '04-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识日子
        { keyword: 'meet_day', date: '2023-02-12' },
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '张同学小朋友',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'qP4ZBbAxEck46IXJojr85ijoIaGxliPmUHIxCP_sicU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '你的农历', year: '1991', date: '03-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '你的阳历', year: '1991', date: '04-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识日子
        { keyword: 'meet_day', date: '2023-02-12' },
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '自己',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oG-5z6twAYTRw-iDIf8wX0xE18LQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'GvuEHmUEgmD_onlQR0al8hy0YjI0iGygz-Z57niQJiE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '张同学的农历', year: '1991', date: '03-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '张同学的阳历', year: '1991', date: '04-19',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '02-12',
        },
        {
          type: '*生日', name: '你的农历', year: '1985', date: '10-01',
        },
        {
          type: '生日', name: '你的阳历', year: '1985', date: '11-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识日子
        { keyword: 'meet_day', date: '2023-02-12' },
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-19' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-09-09' },
      ],
    },
  ],
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'XDS6LbXUr1ySl0Bp0mFYzKQA5QJfDaPJUQpULPSMuYg',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oG-5z6twAYTRw-iDIf8wX0xE18LQ',
    }
  ],
  
  /** 插槽 */
  /** 你可以在这里写超多的你想显示的内容了！
   * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
   * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
   * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '你主要的问题在于读书太少而想得太多' },
    // 这样配置的话，就会每次随机选一句话发送
    {
      keyword: 'lover_prattle',
      contents: [
        '因为太喜欢你，所以看谁都像是情敌。',
        '申请成为你爱里的永久居民。',
        '你很傻，你很笨，可我还是很羡慕你，因为你有我。',
        '遇见你，就好像捡到了100斤的运气。',
        '纵是这花花世界有千般好万般秒与我又有何干？我已有你，足矣！',
        '我喜欢夏天的雨，雨后的光，和任何时候的你。',
      ],
    }
  ]

}

module.exports = USER_CONFIG

