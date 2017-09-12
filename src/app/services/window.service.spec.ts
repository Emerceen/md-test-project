import { WindowRefService } from './window.service';

describe('Service: WindowService', () => {
  const service = new WindowRefService();

  describe('nativeWindow()', () => {
    it('should return window', () => {
      expect(service.nativeWindow).toBe(window);
    });
  });
});
