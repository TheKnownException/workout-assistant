export class ValidationError extends Error {
  constructor(message, field, meta) {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.meta = meta || {}
  }
}

export class DuplicateConstraintError extends Error {
  constructor(message, meta) {
    super(message)
    this.name = 'DuplicateConstraintError'
    this.meta = meta || {}
  }
}
