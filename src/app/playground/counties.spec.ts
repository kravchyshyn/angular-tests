import {countries} from './counties';


describe('countries', () => {
    it('should contain countries codes', () => {
        const result = countries()
        expect(result).toContain('UA')
        expect(result).toContain('US')
        expect(result).toContain('EU')
    })
})
