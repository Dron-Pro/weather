import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {
  let sut: ConfigurationService;

  let environment;

  beforeEach(() => {
    environment = {
      baseApiUrl: 'mockBaseApiUrl',
      appId: 'mockAppId'
    };

    sut = new ConfigurationService(
      environment
    );
  });

  it('should provide base url', () => {
    expect(sut.baseUrl).toBe('mockBaseApiUrl');
  });

  it('should provide application id', () => {
    expect(sut.appId).toBe('mockAppId');
  });
});
