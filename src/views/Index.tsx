import { createComponent } from '@vue/composition-api';
const Index = createComponent({
    name: 'Index',
    setup() {
        return () => (
            <div>
                <h1>hello</h1>
            </div>
        )
    }
})
export default Index;