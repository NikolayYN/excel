import {ExcelComponent} from '@core/ExcelComponent';


export class Header extends ExcelComponent {
		static className = 'excel__header'
		toHTML() {
				return `
			 <input type="text" class="input" value="Новая таблица">
        <div>
            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
            <!-- /.material-icon -->
            <div class="button">
                <i class="material-icons">delete_forever</i>
            </div>
            <!-- /.material-icon -->
        </div>
			`
		}
}

