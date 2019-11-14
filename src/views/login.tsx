import { createComponent, ref, Ref, reactive } from '@vue/composition-api';
import { Button } from 'view-design'
const Login = createComponent({
    name: 'Index',
    setup() {
        let count: Ref<number> = ref(0);
        let obj = reactive({
            a: 1,
            b: 2
        })
        const handleChange = () => {
            count.value++
            obj.a++
        }
        return () => (
            <div>
                <p>{count.value}</p>
                <p>{obj.a}</p>
                <Button type="primary" onClick={handleChange}>点击</Button>
            </div>
        )
    }
})
export default Login;