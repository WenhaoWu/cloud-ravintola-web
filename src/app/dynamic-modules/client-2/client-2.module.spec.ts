import { Client2Module } from './client-2.module';

describe('Client2Module', () => {
  let client2Module: Client2Module;

  beforeEach(() => {
    client2Module = new Client2Module();
  });

  it('should create an instance', () => {
    expect(client2Module).toBeTruthy();
  });
});
