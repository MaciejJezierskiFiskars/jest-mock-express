// Types
import type { Socket } from 'net'
import type { Response } from 'express'

export function callAllFunctions(res: Response) {
  /* express.Response */
  res.status(123)
  res.sendStatus(123)
  res.links({})
  res.send()
  res.json()
  res.jsonp()
  res.sendFile('test')
  res.download('test')
  res.contentType('test')
  res.type('test')
  res.format({})
  res.attachment()
  res.set({})
  res.header({})
  res.get('test')
  res.clearCookie('test')
  res.cookie('test', 'test')
  res.location('test')
  res.redirect('test')
  res.render('test')
  res.vary('test')
  res.append('test')

  /* http.ServerResponse */
  res.assignSocket({} as Socket)
  res.detachSocket({} as Socket)
  res.writeContinue()
  res.writeHead(123)
  res.writeProcessing()

  /* http.OutgoingMessage */
  res.setTimeout(123)
  res.setHeader('test', 'test')
  res.getHeader('test')
  res.getHeaders()
  res.getHeaderNames()
  res.hasHeader('test')
  res.removeHeader('test')
  res.addTrailers([])
  res.flushHeaders()

  /* stream.Writable */
  res._write({}, 'base64', jest.fn())
  res._writev && res._writev([], jest.fn())
  res._destroy(null, jest.fn())
  res._final(jest.fn())
  res.write({}, jest.fn())
  res.setDefaultEncoding('base64')
  res.end()
  res.cork()
  res.uncork()
  res.destroy()
  res.addListener('test', jest.fn())
  res.emit('test')
  res.on('test', jest.fn())
  res.once('test', jest.fn())
  res.prependListener('test', jest.fn())
  res.prependOnceListener('test', jest.fn())
  res.removeListener('test', jest.fn())

  /* event.EventEmitter */
  // addListener - is handled/overridden as part of stream.Writable
  // on - is handled/overridden as part of stream.Writable
  // once - is handled/overridden as part of stream.Writable
  // removeListener - is handled/overridden as part of stream.Writable
  res.off('test', jest.fn())
  res.removeAllListeners()
  res.setMaxListeners(2)
  res.getMaxListeners()
  res.listeners('test')
  res.rawListeners('test')
  // emit - is handled/overridden as part of stream.Writable
  res.listenerCount('test')
  // prependListener - is handled/overridden as part of stream.Writable
  // prependOnceListener - is handled/overridden as part of stream.Writable
  res.eventNames()
}
