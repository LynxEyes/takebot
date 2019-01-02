class BaseError {
  constructor(message) {
    this.message = message
  }
}

export class AppDoesNotExist extends BaseError {}
export class AppIsNotTaken extends BaseError {}
export class AppIsTaken extends BaseError {}
