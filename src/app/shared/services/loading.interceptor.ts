import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "./loading.service";
import { finalize } from "rxjs";

export const loadingInterceptor: HttpInterceptorFn =
  (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    
    const _loadingService = inject(LoadingService);

    _loadingService.loadingOn();

    return next(req).pipe(finalize( ( )=> _loadingService.loadingOff() ));

  }