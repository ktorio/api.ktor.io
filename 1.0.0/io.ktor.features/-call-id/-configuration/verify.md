---
title: CallId.Configuration.verify - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">CallId</a> / <a href="index.html">Configuration</a> / <a href="./verify.html">verify</a></div>

# verify

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verify</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.Function1((kotlin.String, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<a href="../../-call-id-verifier.html"><span class="identifier">CallIdVerifier</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verify retrieved or generated call ids using the specified <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.Function1((kotlin.String, kotlin.Boolean)))/predicate">predicate</a>. Should return <code>true</code> for valid
call ids, <code>false</code> to ignore an illegal retrieved or generated call id
or throw an <a href="../../-rejected-call-id-exception/index.html">RejectedCallIdException</a> to reject an <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a>.
Only one verify condition could be specified.
It is not recommended to disable verification (allow all call id values) as it could be abused
so that it may become a security risk.
By default there is always the default verifier against <a href="../../-c-a-l-l_-i-d_-d-e-f-a-u-l-t_-d-i-c-t-i-o-n-a-r-y.html">CALL_ID_DEFAULT_DICTIONARY</a>
so all illegal call ids will be discarded.

**See Also**

<a href="../../-call-id-verifier.html">CallIdVerifier</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">verify</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/dictionary">dictionary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/reject">reject</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Verify retrieved or generated call ids against the specified <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/dictionary">dictionary</a>.
Rejects an <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> if <a href="verify.html#io.ktor.features.CallId.Configuration$verify(kotlin.String, kotlin.Boolean)/reject">reject</a> is <code>true</code>
otherwise an illegal call id will be simply ignored.
Only one verify condition or dictionary could be specified

</div>
