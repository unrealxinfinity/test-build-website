import ScrollBar from "./ScrollBar.js";
import { useRef } from "react";
export default function MyPage({states=null,dispatch=null,macros=null,actions=null,animation=null}){
    const contentPageRef = useRef(null);
    const scrollBarLeftProps = {
        options:["Ola","Test","Adeus","last Adeus"],
        className:"scrollable-container left no-list-default-style",
        contentRef:contentPageRef
    }
    const scrollBarTopProps={
        options:["120","130","140","150","160" ,"170","180","190","200","210","220","230"],
        className:"scrollable-container top no-list-default-style",
        contentRef:contentPageRef
    }
    return(
        <div className={"mypage "+animation}>
            <ScrollBar props={scrollBarTopProps}/>
            <div className="content-container" ref={contentPageRef}>asoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmcasoijcoasncascaspkcmaspcmpacmopwmpcaplsasoicnasiocnoasioiasncaoscnoscnaocaiocnasiocacioanciosancisaocioascnioacnasiocnaoicanoicnasoicoicascmpamscmasmcpawmopdmpawmcasmcmascmlasmlçcmaslçcmsalçcmlçascmslçvamçfmsalçcmaslçcmasçcmaçlcmasçmasvlmasçcmalscmçlascmasçlmcçasmcçaslmlcçqmçlvmqçmcçlsamçcmfçwlqmçlcmaçlsmfçwqlmcasçmcwlqmcçlamlmwçlamçcsmçwlmaslçcçlwamlçcslçwamcslçwlamcslçwamcslçwamlçscmçlwamclçwamlçscmçlwamcslçwmçlcqwmc</div>
            <ScrollBar props={scrollBarLeftProps}/>
        </div>
    )

}