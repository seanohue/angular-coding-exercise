import { name as MarvelServiceModule } from './index';
let MarvelService;

describe(MarvelServiceModule, function () {
  beforeEach(angular.mock.module(MarvelServiceModule));
  beforeEach(inject(function (_MarvelService_) {
    MarvelService = _MarvelService_;
  }));

  it('Should have a test.', function () {
    assert.equal(1, 1);
    expect(true).to.be.true;
  });

  it('Should have a method .get().', function () {
    expect(MarvelService.get).to.be.a('function');
  });
});
