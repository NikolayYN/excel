import {Excel} from '@/components/excel/Excel'
import {Header} from '@/components/header/Header';
import {Table} from '@/components/table/Table';
import {Formula} from '@/components/formula/Formula';
import {ToolBar} from '@/components/toolbar/ToolBar';
import './scss/style.scss'

const excel = new Excel('#app', {
    components: [Header, ToolBar, Formula, Table]
})

console.log('excel', excel.render())

