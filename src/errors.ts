export class JSONApiErrorDetail {
  public title: string;
  public detail: string;
  public source: string;
  public status: string;

  constructor (title: string, detail: string, source: string, status: string) {
    this.title = title;
    if (detail) { this.detail = detail; }
    if (source) { this.source = source; }
    if (status) { this.status = status; }
  }
}

export class ErrorWithDetails extends Error {
  public errors: JSONApiErrorDetail[];

  constructor (message: string, jsonApiErrorDetails?: JSONApiErrorDetail[]) {
    super(message);
    if (jsonApiErrorDetails) {
      this.errors = jsonApiErrorDetails;
    }
  }
}

export class ResourceNotFound extends ErrorWithDetails {
  public type: string;

  constructor (type: string, message: string, jsonApiErrorDetails?: JSONApiErrorDetail[]) {
    super(message, jsonApiErrorDetails);
    this.type = type;
  }
}

export class BadRequest extends ErrorWithDetails { }
export class Forbidden extends ErrorWithDetails { }
export class UnprocessableEntity extends ErrorWithDetails { }
export class Conflict extends ErrorWithDetails { }
