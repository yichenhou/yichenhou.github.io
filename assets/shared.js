const DEFAULT_CONFIG={sources:['Core HR','Payroll','Recruiting'],complete:90,fresh:7,consistent:85,quarantine:true,history:'monthly',orgHistory:true,semantic:['KPI certificați','Calendar comun','Explainability'],guard:30,published:false};
function loadConfig(){try{return {...DEFAULT_CONFIG,...JSON.parse(localStorage.getItem('wiConfig')||'{}')}}catch{return {...DEFAULT_CONFIG}}}
function saveConfig(c){localStorage.setItem('wiConfig',JSON.stringify(c))}
