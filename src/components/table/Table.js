import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
		static className = 'excel__table'
		toHTML() {
				return `
				 <div class="row">
            <div class="row-info"></div>
            <!-- /.row-info -->
            <div class="row-data">
                <div class="column">A</div>
                <div class="column">B</div>
                <div class="column">C</div>
                <!-- /.column -->
            </div>
            <!-- /.row-data -->
        </div>
        <div class="row">
            <div class="row-info">1</div>
            <!-- /.row-info -->
            <div class="row-data">
                <div class="cell selected" contenteditable="">A!</div>
                <div class="cell" contenteditable="">B@</div>
                <div class="cell" contenteditable=""></div>
            </div>
            <!-- /.row-data -->
        </div>
        <div class="row">
            <div class="row-info">1</div>
            <!-- /.row-info -->
            <div class="row-data">
                <div class="cell selected" contenteditable>A!</div>
                <div class="cell" contenteditable>B@</div>
                <div class="cell" contenteditable></div>
            </div>
            <!-- /.row-data -->
        </div>
				`
		}
}

