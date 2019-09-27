import {ToastrService} from "ngx-toastr";

export class MaterialService {
  constructor(private toastr: ToastrService) {
  }

  toast(message: string) {
    this.toastr.success(message)
  }
}
