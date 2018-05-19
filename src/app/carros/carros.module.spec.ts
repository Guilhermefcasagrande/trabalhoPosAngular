import { CarrosModule } from './carros.module';

describe('CarrosModule', () => {
  let carrosModule: CarrosModule;

  beforeEach(() => {
    carrosModule = new CarrosModule();
  });

  it('should create an instance', () => {
    expect(carrosModule).toBeTruthy();
  });
});
