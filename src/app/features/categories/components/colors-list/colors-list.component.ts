import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const MODULES = [MatDividerModule];

@Component({
  selector: 'app-colors-list',
  standalone: true,
  imports: [...MODULES],
  templateUrl: './colors-list.component.html',
  styleUrl: './colors-list.component.scss'
})
export class ColorsListComponent {

  private readonly categoriesService = inject(CategoryService);
  public categories = this.categoriesService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
  
}
