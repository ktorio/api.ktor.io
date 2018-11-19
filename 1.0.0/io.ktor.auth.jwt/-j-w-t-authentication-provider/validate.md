---
title: JWTAuthenticationProvider.validate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth.jwt</a> / <a href="index.html">JWTAuthenticationProvider</a> / <a href="./validate.html">validate</a></div>

# validate

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">validate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.jwt.JWTAuthenticationProvider$validate(kotlin.SuspendFunction2((io.ktor.application.ApplicationCall, io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-j-w-t-credential/index.html"><span class="identifier">JWTCredential</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.auth/-principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Apply <a href="validate.html#io.ktor.auth.jwt.JWTAuthenticationProvider$validate(kotlin.SuspendFunction2((io.ktor.application.ApplicationCall, io.ktor.auth.jwt.JWTCredential, io.ktor.auth.Principal)))/validate">validate</a> function to every call with <a href="../-j-w-t-credential/index.html">JWTCredential</a>

**Return**
a principal (usually an instance of <a href="../-j-w-t-principal/index.html">JWTPrincipal</a>) or <code>null</code>

