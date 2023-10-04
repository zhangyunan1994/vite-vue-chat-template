import { get, post } from '@/utils/request'

export function fetchMemberInfo<T = any>() {
  return get<T>({
    url: '/member/info',
  })
}

export function modifyMemberInfo<T = any>(avatar: string, nickname: string) {
  return post<T>({
    url: '/member/info',
    data: {
      avatar,
      nickname,
    },
  })
}

export function memberModifyPwd<T = any>(oldPassword: string, newPassword: string) {
  return post<T>({
    url: '/member/modifyPwd',
    data: {
      newPassword,
      oldPassword,
    },
  })
}

export function authLogin<T>(username: string, password: string) {
  return post<T>({
    url: '/auth/login/withPassword',
    data: {
      username,
      password,
    },
  })
}

export function authSignup<T>(username: string, password: string, email: string, invitationCode?: string | null) {
  return post<T>({
    url: '/auth/signup',
    data: {
      username,
      password,
      email,
      invitationCode,
    },
  })
}

export function checkToken<T>() {
  return get<T>({
    url: '/auth/checkToken',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}
