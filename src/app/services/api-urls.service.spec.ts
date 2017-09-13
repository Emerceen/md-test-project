import { ApiURLs } from './api-urls.service';

describe('ApiUrls', () => {
  const apiURLs = new ApiURLs(
    {
      apiGitHubEndpoint: 'http://GitHub/',
      apiDystansEndpoint: 'http://Dystans/'
    }
  );
  it('should return url for GitHub', () => {
    const response = apiURLs.getGitHubURL('test');
    expect(response).toBe('http://GitHub/test');
  });

  it('should return url for Dystans', () => {
    const response = apiURLs.getDystansURL('test');
    expect(response).toBe('http://Dystans/test');
  });
});
