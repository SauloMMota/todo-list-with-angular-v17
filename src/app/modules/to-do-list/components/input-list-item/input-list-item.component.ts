import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItem } from '../../interfaces/IListItems.iterface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss',
})
export class InputListItemComponent {
  @Input({ required: true }) public inputListItems: IListItem[] = [];
  @Output() public outputUpdateItemCheckBox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  public updateItemCheckBox(id: string, checked: boolean) {
    return this.outputUpdateItemCheckBox.emit({ id, checked });
  }

  @Output() public outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();

  public updateItemText(id: string, value: string) {
    return this.outputUpdateItemText.emit({ id, value });
  }

  @Output() public outputDeleteItem = new EventEmitter<string>();

  public deleteItem(id: string) {
    return this.outputDeleteItem.emit(id);
  }
}
