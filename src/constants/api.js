const api = {
  // 登录
  GET_CHECKCODE_URL: 'IM01003.do',
  SET_LOGIN: 'IM01001.do',
  GET_SESSION: 'IM01005.do',

  // 注销 & 修改密码
  SET_LOGOUT: 'IM01004.do',
  SET_PASSWORD: 'IM03006.do',

  // 机构
  GET_BRANCH_BY_ID: 'IM02005.do',
  GET_BRANCH_LIST: 'IM02004.do',
  DEL_BRANCH: 'IM02002.do',
  ADD_BRANCH: 'IM02001.do',
  SET_BRANCH: 'IM02003.do',

  // 岗位
  GET_POST_LIST: 'IM02006.do',
  GET_POST_ALL_LIST: 'IM02009.do',
  GET_POST_QUERY_LIST: 'IM02010.do',
  SET_POST_QUERY_LIST: 'IM02007.do',
  DEL_POST_LIST: 'IM02008.do',

  GET_AUTHRESOURCE: 'IM01006.do',
  GET_USER_INFO: 'IM01006.do',

  GET_FUNCTION_lIST: 'IM06004.do',
  ADD_FUNCTION_ITEM: 'IM06001.do',
  DEL_FUNCTION_ITEM: 'IM06003.do',
  SET_FUNCTION_ITEM: 'IM06002.do',
  GET_FUNCTION_ITEM: 'IM06005.do',

  GET_USER_BY_BRH: 'IM03004.do',

  GET_CONFIG_DATA: 'IM01002.do',
  GET_ROLE_LIST: 'IM05003.do',

  ADD_USER: 'IM09004.do',
  SET_USER_BIND_ROLE: 'IM03005.do',
  DEL_USER: 'IM03001.do',

  SET_UPDATE_USER: 'IM03002.do',
  DEL_USER_ROLE: 'UserReverseRoleAction.do',

  GET_ROLE_BY_USER: 'IM03003.do',
  GET_ROLE_BY_NAME: 'RoleGetByNameAction.do',

  // 角色详情
  GET_ROLE_ITEM: 'IM05004.do',
  SET_ROLE_UPDATE: 'IM05002.do',
  GET_ROLE_NAME_CHECK: 'IM05004.do',
  ADD_ROLE: 'IM09005.do',
  DEL_ROLE: 'IM05001.do',
  GET_ROLE_ALL_ITEM: 'IM05005.do',
  SET_ROLE_BIND_ITEM: 'IM05006.do',

  GET_MENU_LIST: 'IM07005.do',
  DEL_MENU_ITEM: 'IM07008.do',
  GET_MENU_ITEM: 'IM07009.do',
  GET_MENU: 'IM07004.do',

  GET_ABS_ITEM: 'IM07010.do',

  ADD_MENU_ITEM: 'IM07006.do',
  SET_UPDATE_MENU: 'IM07002.do',
  SET_UPDATE_MENU_ITEM: 'IM07007.do',

  GET_ALL_FIRST_PAGE_URL: 'IM05007.do',
  CONNET_USER_AND_ROLE_URL: 'IM09006.do',

  // 策略管理
  GET_STRATEGY_LIST: 'IM04005.do',
  ADD_STRATEGY: 'IM04001.do',
  DEL_STRATEGY: 'IM04003.do',
  SET_STRATEGY: 'IM04002.do',
  GET_STRATEGY: 'IM04004.do',
  GET_BSN_LIST: 'IM08005.do',
  SET_CONNECTION: 'IM08007.do',

  // 审查管理
  GET_CHECK_LIST: 'IM09002.do',
  GET_CHECK_HISTORY_LIST: 'IM09001.do',
  SET_CHECK_OPERATE: 'IM09003.do',
  GET_CHECK_STATE_LIST: 'IM09007.do',

  // TASKMAN
  GET_SCHEDULE_LIST: 'TSM01001.do',
  SET_SCHEDULE_OPERATE: 'TSM01018.do',
  ADD_SCHEDULE: 'TSM01002.do',
  SET_SCHEDULE: 'TSM01003.do',
  DEL_SCHEDULE: 'TSM01004.do',
  GET_SCHEDULE_TASK_REL: 'TSM01014.do',
  SET_SCHEDULE_TASK_REL: 'TSM01013.do',

  // TASKMAN普通任务
  GET_TASK_LIST: 'TSM01008.do',
  ADD_TASK_LIST: 'TSM01005.do',
  SET_TASK_LIST: 'TSM01006.do',
  DEL_TASK_LIST: 'TSM01007.do',

  // TASKMAN批量任务
  GET_BATCH_TASK_LIST: 'TSM01012.do',
  ADD_BATCH_TASK_LIST: 'TSM01009.do',
  GET_BATCH_TASK_DETAIL: 'TSM01016.do',
  SET_BATCH_TASK_LIST: 'TSM01011.do',
  DEL_BATCH_TASK_LIST: 'TSM01010.do',

  // 计划权限管理
  GET_ASSOCIATE_LIST: 'TSM01017.do',
  SET_SCHEDULE_ROLE_ASSOCIATE: 'TSM01015.do',

  // 白名单管理
  GET_WHITELIST: 'IM10002.do',
  ADD_WHITELIST: 'IM10001.do',
  DEL_WHITELIST: 'IM10004.do',
  ADD_WHITELIST_INFO: 'IM10003.do',

  // 资源配置管理
  GET_RESOURCE: 'IM10006.do',
  ADD_RESOURCE: 'IM10005.do',
  DEL_RESOURCE: 'IM10008.do',
  SET_RESOURCE: 'IM10007.do',

  // 热修复管理
  GET_HOTPATCH_LIST: 'IM10017.do',
  ADD_HOTPATCH_LIST: 'IM10016.do',
  GET_QUERY_HOTPATCH_LIST: 'IM10019.do',
  ADD_HOTPATCH_TASK: 'IM10018.do',
  SET_PAUSE_HOTPATCH_TASK: 'IM10015.do',

  // 发布管理
  GET_UPDATE_LIST: 'IM10010.do',
  ADD_UPGRADE_LIST: 'IM10009.do',
  ADD_UPGRADE_TASK: 'IM10012.do',
  GET_UPGRADE_TASK: 'IM10013.do',
  GET_UPGRADE_TASK_DETAIL: 'IM10014.do',
  SET_UPGRADE_TASK_STATUS: 'IM10015.do'

}

export default api
