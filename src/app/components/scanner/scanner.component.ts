import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {

  scannerEnabled: boolean = true;
  information: string ='';

  allowedFormats: any[] = [ BarcodeFormat.EAN_13, BarcodeFormat.QR_CODE, BarcodeFormat.DATA_MATRIX, BarcodeFormat.EAN_8, BarcodeFormat.CODE_128, BarcodeFormat.ITF, BarcodeFormat.RSS_14 ];

  constructor(private _router:Router) { 
0 
  }

  ngOnInit(): void {
  }



  public scanSuccessHandler(code: any): void {
    this.scannerEnabled = false; 
    this._router.navigate(['product/', code]);
  }

  public enableScanner(): void {
    console.log(this.scannerEnabled);
    this.scannerEnabled = !this.scannerEnabled;
  }

  public errorHandle(error: any): void{
    console.log(error);
  }
  
}
