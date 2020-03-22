import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/shared/model/repository.model';

@Component({
  selector: 'app-repository-list-item',
  templateUrl: './repository-list-item.component.html',
})
export class RepositoryListItemComponent {
  @Input() repository: Repository;
}
