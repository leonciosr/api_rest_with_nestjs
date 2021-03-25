export class UserNameUniqueError extends Error {
  constructor (paramName: string) {
    super(`The username ${paramName} is not unique`)
    this.name = 'UserNameUniqueError'
  }
}
