import {greet} from './greet';

describe('greet', () => {
    it('should include name in returned message', () => {
        expect(greet('Nastya')).toContain('Nastya')
    })

    it('should include name in returned message', () => {
        expect(greet('Nastya')).toContain('Nastya')
    })
})
