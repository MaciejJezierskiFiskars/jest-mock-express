// Libraries
import { Request } from 'express'

// Types
import type { MockRequest } from './index'

/**
 * Returns a mocked **Express** `Request` with mocked functions and default values.
 */
export const getMockReq = <T extends Request>(values: MockRequest = {}): T => {
  const {
    params = {},
    query = {},
    body = {},
    cookies = {},
    method = '',
    protocol = '',
    secure = false,
    ip = '',
    ips = [],
    subdomains = [],
    path = '',
    hostname = '',
    host = '',
    fresh = false,
    stale = false,
    xhr = false,
    route = {},
    signedCookies = {},
    originalUrl = '',
    url = '',
    baseUrl = '',
    accepted = [],
    get = jest.fn().mockName('get mock default'),
    header = jest.fn().mockName('header mock default'),
    accepts = jest.fn().mockName('accepts mock default'),
    acceptsCharsets = jest.fn().mockName('acceptsCharsets mock default'),
    acceptsEncodings = jest.fn().mockName('acceptsEncodings mock default'),
    acceptsLanguages = jest.fn().mockName('acceptsLanguages mock default'),
    range = jest.fn().mockName('range mock default'),
    param = jest.fn().mockName('param mock default'),
    is = jest.fn().mockName('is mock default'),
    app = {},
    res = jest.fn().mockName('res mock default'),
    next = jest.fn().mockName('next mock default'),
    aborted = false,
    httpVersion = '',
    httpVersionMajor = 0,
    httpVersionMinor = 0,
    complete = false,
    connection = {},
    socket = {},
    headers = {},
    rawHeaders = [],
    trailers = {},
    rawTrailers = [],
    setTimeout = jest.fn().mockName('setTimeout mock default'),
    statusCode = 0,
    statusMessage = '',
    destroy = jest.fn().mockName('destroy mock default'),
    ...extraProvidedValues
  } = values

  return {
    params,
    query,
    body,
    cookies,
    method,
    protocol,
    secure,
    ip,
    ips,
    subdomains,
    path,
    hostname,
    host,
    fresh,
    stale,
    xhr,
    route,
    signedCookies,
    originalUrl,
    url,
    baseUrl,
    accepted,
    get,
    header,
    accepts,
    acceptsCharsets,
    acceptsEncodings,
    acceptsLanguages,
    range,
    param,
    is,
    app,
    res,
    next,

    // http - IncomingMessage
    aborted,
    httpVersion,
    httpVersionMajor,
    httpVersionMinor,
    complete,
    connection,
    socket,
    headers,
    rawHeaders,
    trailers,
    rawTrailers,
    setTimeout,
    statusCode,
    statusMessage,
    destroy,

    // custom values
    ...extraProvidedValues,
  } as T
}

export default getMockReq
