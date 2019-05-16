import config from './index';
// 退出登陆
export const Logout = `${config.baseUrl}/api/mobile/index.php?version=4&module=logout`
// 登陆
export const Login = `${config.baseUrl}/api/mobile/index.php?version=5&module=login`
// 个人信息
export const GetProfile = `${config.baseUrl}/api/mobile/index.php?version=5&module=profile`

