export const authHeader = {
    authroization: document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1] as string,
}

export const BASE_URL = 'https://ezfee.site/api/'