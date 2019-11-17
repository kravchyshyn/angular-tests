import {CounterComponent} from './counter.component';
import {FormBuilder} from '@angular/forms';

describe('CounterComponent', () => {
    let component: CounterComponent

    beforeEach(() => {
        component = new CounterComponent(new FormBuilder())
    })

    it ('should increment counter by 1', () => {
        component.increment()
        expect(component.counter).toBe(1)

    })

    it ('should decrement counter by 1', () => {
        component.decrement()
        expect(component.counter).toBe(-1)
    })

    it('should increment value by event emitter', () => {
        let result = null

        component.counterEmitter.subscribe(v => result = v)

        component.increment()

        expect(result).toEqual(1)
    })

    it('should create form with 2 controls', () => {
        expect(component.form.contains('login')).toBeTruthy()
        expect(component.form.contains('email')).toBeTruthy()
    })

    it('should mark login as invalid if empty value', () => {
        const login = component.form.get('login')

        login.setValue('')
        expect(login.valid).toBeFalsy()

    })

    it('should mark login as valid if not-empty value', () => {
        const login = component.form.get('login')

        login.setValue('Nastya')

        expect(login.valid).toBeTruthy()
    })
})
