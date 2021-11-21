export class ValidationError extends Error {
  constructor(message, field, meta) {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.meta = meta || {}
  }
}
