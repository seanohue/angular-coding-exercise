import { name as MarvelServiceModule } from './index';
var MarvelService;

describe(MarvelServiceModule, function () {
  beforeEach(angular.mock.module(MarvelServiceModule));
  beforeEach(inject(function (_MarvelService_) {
    MarvelService = _MarvelService_;
  }));

  it('Should be an object.', function () {
    expect(MarvelService).to.be.an.object;
  });

  it('Should have a method .get().', function () {
    expect(MarvelService.get).to.be.a.function;
  });

  it('Should have a method .getOne().', function () {
    expect(MarvelService.getOne).to.be.a.function;
  });
});
