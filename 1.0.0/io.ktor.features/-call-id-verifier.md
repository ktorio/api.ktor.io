---
title: CallIdVerifier - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.features</a> / <a href="./-call-id-verifier.html">CallIdVerifier</a></div>

# CallIdVerifier

<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">CallIdVerifier</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

A function that verifies retrieved or generated call id. Should return <code>true</code> for a valid call id.
Also it could throw a <a href="-rejected-call-id-exception/index.html">RejectedCallIdException</a> to reject an <a href="../io.ktor.application/-application-call/index.html">ApplicationCall</a> otherwise an illegal call id
will be ignored or replaced with generated one.

