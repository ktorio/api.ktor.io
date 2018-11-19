---
title: FormAuthenticationProvider.validate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="index.html">FormAuthenticationProvider</a> / <a href="./validate.html">validate</a></div>

# validate

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.FormAuthenticationProvider$validate(kotlin.SuspendFunction2((io.ktor.application.ApplicationCall, io.ktor.auth.UserPasswordCredential, io.ktor.auth.Principal)))/body">body</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a validation function that will check given <a href="../-user-password-credential/index.html">UserPasswordCredential</a> instance and return <a href="../-principal.html">Principal</a>,
or null if credential does not correspond to an authenticated principal

