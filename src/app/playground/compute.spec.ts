import {compute} from './compute';

describe('compute', () => {

    it('should return 0 if negative', () => {
        const result = compute(-1)

        expect(result).toBe(0)
    })

    it('shoud increment input if positive', () => {
        expect(compute(10)).toEqual(11)
    })
})
