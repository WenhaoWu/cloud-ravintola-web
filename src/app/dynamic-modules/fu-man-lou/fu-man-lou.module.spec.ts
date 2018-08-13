import { FuManLouModule } from './fu-man-lou.module';

describe('FuManLouModule', () => {
  let fuManLouModule: FuManLouModule;

  beforeEach(() => {
    fuManLouModule = new FuManLouModule();
  });

  it('should create an instance', () => {
    expect(fuManLouModule).toBeTruthy();
  });
});
