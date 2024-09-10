import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AlertService} from "../services/alert.service";
import {AuthService} from "../services/auth.service";

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const alertService = inject(AlertService);
  const authService = inject(AuthService);
  const token = authService.getToken();
  if(!token) {
    alertService.create({
      text: `Vous n'êtes pas autorisé.e à acceder à cette ressource.`,
      level: 'error'
    })
    router.navigate(['/login'])
    return false;
  }
  return true;
};
