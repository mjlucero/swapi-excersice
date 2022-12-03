export class AbortService {
  private abortController = new AbortController();

  abortCalls(reason?: string) {
    this.abortController.abort(reason);
  }

  protected get controllerSignal() {
    return this.abortController.signal;
  }
}
