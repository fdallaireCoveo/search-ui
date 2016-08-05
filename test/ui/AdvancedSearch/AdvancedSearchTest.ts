/// <reference path="../../Test.ts" />

module Coveo {
  describe('AdvancedSearch', () => {
    var test: Mock.IBasicComponentSetup<AdvancedSearch>;

    beforeEach(function () {
      test = Mock.basicComponentSetup<AdvancedSearch>(AdvancedSearch);
    });

    afterEach(function () {
      test = null;
    });

    describe('exposes includeKeywords', () => {
      it('should include the keywords section by default', () => {
        let section = $$(test.cmp.element).find('.coveo-advanced-search-keywords-section');
        expect(section).not.toBeNull();
      })
      it('should not include the keywords section if false', () => {
        test = Mock.optionsComponentSetup<AdvancedSearch, IAdvancedSearchOptions>(AdvancedSearch, { includeKeywords: false });
        let section = $$(test.cmp.element).find('.coveo-advanced-search-keywords-section');
        expect(section).toBeNull();
      })
    })

    describe('exposes includeDate', () => {
      it('should include the date section by default', () => {
        let section = $$(test.cmp.element).find('.coveo-advanced-search-date-section');
        expect(section).not.toBeNull();
      })
      it('should not include the date section if false', () => {
        test = Mock.optionsComponentSetup<AdvancedSearch, IAdvancedSearchOptions>(AdvancedSearch, { includeDate: false });
        let section = $$(test.cmp.element).find('.coveo-advanced-search-date-section');
        expect(section).toBeNull();
      })
    })

    describe('exposes includeDocument', () => {
      it('should include the document section by default', () => {
        let section = $$(test.cmp.element).find('.coveo-advanced-search-document-section');
        expect(section).not.toBeNull();
      })
      it('should not include the document section if false', () => {
        test = Mock.optionsComponentSetup<AdvancedSearch, IAdvancedSearchOptions>(AdvancedSearch, { includeDocument: false });
        let section = $$(test.cmp.element).find('.coveo-advanced-search-document-section');
        expect(section).toBeNull();
      })
    })

    describe('executeAdvancedSearch', () => {

      beforeEach(() => {
        test.cmp.inputs = [jasmine.createSpyObj('input', ['build', 'updateQueryState'])]
      })


      it('should update the query state model', () => {
        test.cmp.executeAdvancedSearch();
        expect(test.cmp.inputs[0].updateQueryState).toHaveBeenCalled();
      })
      it('should execute a query', () => {
        test.cmp.executeAdvancedSearch();
        expect(test.cmp.queryController.executeQuery).toHaveBeenCalled();
      })
      it('should close itself', () => {
        test.cmp.executeAdvancedSearch();
        expect(test.cmp.element.style.display).toEqual('none');
      })
    })
  })
}
