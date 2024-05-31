describe('Electrons', function() {
	beforeEach(function() {
		electron = new Electrons();
	});

	it('should return 0 for an empty string', function() {
		expect(electron.add('')).toEqual(0);
	});
});
