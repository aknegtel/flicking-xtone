import React from "react";
import dynamic from "next/dynamic";

const H4 = dynamic(() => import("./typography/H4"));
const H5 = dynamic(() => import("./typography/H5"));
const A = dynamic(() => import("./typography/A"));

const NotaLegal = () => {
  return (
    <div
      className={`lg:max-w-4xl mx-auto flex flex-col gap-3 text-justify text-xs sm:text-sm md:text-base lg:text-base`}
    >
      <H4>1. Nota legal</H4>
      <H5 className="mt-2">
        1.1. Datos identificativos del prestador de servicios de la sociedad de
        la información
      </H5>
      <p>
        De conformidad con el artículo 10 de la Ley 34/2002, de Servicios de la
        Sociedad de la Información y Comercio Electrónico, se pone en su
        conocimiento que <strong>Urbatek Ceramics S.A.U</strong>, con{" "}
        <strong>NIF A-12650818</strong>, gestiona los contenidos del sitio Web{" "}
        <A>https://www.urbatek.com</A>, con domicilio social a estos efectos en
        Carretera Nacional 340, Km. 56,2 12540 Vila-real (Castellón, España).
      </p>
      <p>
        En caso de querer ponerse en contacto con nosotros, puede dirigirse al
        domicilio arriba indicado, así como al{" "}
        <strong>teléfono: (+34) 964 525 200</strong>
      </p>
      <H5 className="mt-2">
        1.2. Aceptación y vigencia de las condiciones generales y particulares.
      </H5>
      <p>
        Tanto la navegación como la utilización y/o pedido de cualesquiera de
        los productos ofrecidos en esta página Web le atribuye a Ud. la
        condición de Usuario y supone su aceptación plena y sin reservas de
        todas y cada una de las Condiciones Generales y, en su caso,
        Particulares vigentes en el momento en que Ud. como Usuario acceda a la
        página Web.
      </p>
      <p>
        En consecuencia, el Usuario debe leer con atención las Condiciones
        Generales cada vez que se proponga utilizar la Web así como, en su caso,
        las correspondientes Condiciones Particulares cada vez que se proponga
        utilizar el contenido o servicio de que se trate.
      </p>
      <p>
        En todo caso Urbatek Ceramics S.A.U se reserva el derecho a ampliar y
        modificar unilateralmente, en cualquier momento y sin previo aviso, la
        presentación, configuración y contenidos de la página Web, así como
        suspender temporalmente la presentación, configuración, especificaciones
        técnicas y servicios del sitio web, de la misma forma.
      </p>
      <H4 className="mt-5">2. Condiciones generales de uso del sitio web</H4>
      <H5 className="mt-2">2.1. Obligaciones de uso</H5>
      <p>
        El Usuario es consciente y acepta voluntaria y expresamente que el uso
        de la Web se realiza en todo caso bajo su única y exclusiva
        responsabilidad.
      </p>
      <p>
        Con carácter general, el Usuario se obliga al cumplimiento de las
        presentes condiciones y términos de uso, y obrar siempre conforme a la
        ley, a las buenas costumbres y a las exigencias de la buena fe,
        empleando la diligencia adecuada a la naturaleza del servicio del que
        disfruta, y absteniéndose de utilizar el presente sitio web de cualquier
        forma que pueda impedir, dañar o deteriorar el normal funcionamiento del
        mismo, los bienes o derechos del titular (Urbatek Ceramics S.A.U), del
        resto de Usuarios o, en general, de cualquier tercero.
      </p>
      <p>
        En particular, y sin que ello implique restricción alguna a la
        obligación asumida por el Usuario con carácter general de conformidad
        con el apartado anterior, el Usuario se obliga, en la utilización del
        presente sitio web a:
      </p>
      <p>
        <ol className="pl-3 list-decimal list-inside flex flex-col gap-3">
          <li>
            No introducir, almacenar o difundir en o desde el sitio web,
            cualquier información o material que fuera difamatorio, injurioso,
            obsceno, amenazador, xenófobo, incite a la violencia a la
            discriminación por razón de raza, sexo, ideología, religión o que de
            cualquier forma atente contra la moral, el orden público, los
            derechos fundamentales, las libertas públicas, el honor, la
            intimidad o la imagen y derechos de terceros así como de Urbatek
            Ceramics S.A.U y, en general, que vulnere la normativa vigente
            española y de su país de residencia.
          </li>
          <li>
            No introducir, almacenar o difundir mediante el sitio web ningún
            programa de ordenador, datos, virus, código, o cualquier otro
            fichero que sea susceptible de causar daños o cualquier tipo de
            alteración en el sitio web, en cualquiera de los servicios, o en
            cualquiera de los equipos, sistemas o redes de Urbatek Ceramics
            S.A.U de cualquier Usuario, o en general de cualquier tercero, que
            pueda impedir el normal funcionamiento de los mismos.
          </li>
          <li>
            No destruir, alterar, utilizar para su uso, inutilizar o dañar los
            datos, informaciones, programas, documentos electrónicos, o, en
            general, los ficheros, de Urbatek Ceramics S.A.U, de los Usuarios o
            de terceros.
          </li>
        </ol>
      </p>
      <p>
        Urbatek Ceramics S.A.U podrá, en todo momento y sin previo aviso,
        modificar las presentes Condiciones Generales, así como las Condiciones
        Particulares que, en su caso, se incluyan, mediante la publicación de
        dichas modificaciones en el sitio web con el fin de que puedan ser
        conocidas por los Usuarios.
      </p>
      <H5 className="mt-2">2.2. Exoneración de responsabilidad</H5>
      <p>Urbatek Ceramics S.A.U no será responsable:</p>
      <p>
        <ul className="pl-3 list-disc list-inside flex flex-col gap-3">
          <li>
            Con carácter general, respecto del uso inadecuado de su sitio web.
            Los usuarios deberán realizar un uso adecuado del mismo, de acuerdo
            con las condiciones y términos anteriores, sin que ninguna
            responsabilidad pueda tener el titular por la utilización indebida.
          </li>
          <li>
            Respecto de posibles deficiencias técnicas. Urbatek Ceramics S.A.U
            no será responsable en ningún caso de las alteraciones en el
            servicio que se produzcan por fallos en la red eléctrica, en la red
            de conexión de datos, en el servidor o en cualesquiera prestaciones.
          </li>
          <li>
            Respecto al acceso por terceros a su sistema. Urbatek Ceramics S.A.U
            adoptará las cautelas técnicas necesarias a fin de proteger los
            datos e información a la que se accede, pero sin que sea responsable
            de actuaciones de terceros que, vulnerando las medidas de seguridad
            establecidas, accedan a los citados datos.
          </li>
          <li>
            Urbatek Ceramics S.A.U invierte constantemente en medios
            tecnológicos que intentan minimizar el riesgo de virus y software
            similar, y contenidos no autorizados en sus sistemas de información.
            A pesar de ello, el Usuario es consciente de que las medidas de
            seguridad de los sistemas informáticos en Internet no son
            enteramente fiables y que, por tanto, Urbatek Ceramics S.A.U no
            puede garantizar la inexistencia de virus u otros elementos que
            puedan producir alteraciones en los sistemas informáticos (software
            y hardware) del Usuario o en sus documentos electrónicos y ficheros
            contenidos en los mismos mediante software no autorizado, virus,
            troyanos y cualquier clase del software denominado mal-ware,
            eximiendo a Urbatek Ceramics S.A.U de toda responsabilidad que
            pudiese derivarse de la contención de malware en los tratamientos
            habilitados en la presente web.
          </li>
        </ul>
      </p>
      <H5 className="mt-2">2.3. Utilización de hiperenlaces.</H5>
      <p>
        El usuario de Internet que quiera introducir enlaces desde sus propias
        Webs a la Página Web deberá de obtener un autorización previa y por
        escrito de Urbatek Ceramics S.A.U además de cumplir con las condiciones
        que se detallan a continuación sin que el desconocimiento de las mismas
        evite las responsabilidades derivadas de la Ley.
      </p>
      <p>
        El enlace únicamente vinculará con la home page o página principal de la
        página Web pero no podrá reproducirla de ninguna forma (inline links,
        copia de los textos, gráficos, etc.). Quedará en todo caso prohibido, de
        acuerdo con la legislación aplicable y vigente en cada momento,
        establecer frames o marcos de cualquier tipo que envuelvan a la página
        Web o permitan la visualización de los contenidos a través de
        direcciones de Internet distintas a las de la página Web y, en cualquier
        caso, cuando se visualicen conjuntamente con contenidos ajenos a la
        Página Web de forma que: (I) produzca, o pueda producir, error,
        confusión o engaño en los usuarios sobre la verdadera procedencia del
        servicio o Contenidos; (II) suponga un acto de comparación o imitación
        desleal; (III) sirva para aprovechar la reputación de la marca y
        prestigio de Urbatek Ceramics S.A.U.; o (IV) de cualquier otra forma
        resulte prohibido por la legislación vigente.
      </p>
      <p>
        No se realizarán desde la página que introduce el enlace ningún tipo de
        manifestación falsa, inexacta o incorrecta sobre Urbatek Ceramics S.A.U,
        su dirección, empleados, clientes o sobre la calidad de los servicios
        que presta.
      </p>
      <p>
        En ningún caso, se expresará en la página donde se ubique el enlace que
        Urbatek Ceramics S.A.U ha prestado su consentimiento para la inserción
        del enlace o que de otra forma patrocina, colabora, verifica o supervisa
        los servicios del remitente.
      </p>
      <p>
        Está prohibida la utilización de cualquier marca denominativa, gráfica o
        mixta o cualquier otro signo distintivo de Urbatek Ceramics S.A.U dentro
        de la página del remitente salvo en los casos permitidos por la ley o
        expresamente autorizados por Urbatek Ceramics S.A.U y siempre que se
        permita, en estos casos, un enlace directo con la página Web en la forma
        establecida en esta cláusula.
      </p>
      <p>
        La página que establezca el enlace deberá cumplir fielmente con la ley y
        no podrá en ningún caso disponer o enlazar con contenidos propios o de
        terceros que: (I) sean ilícitos, nocivos o contrarios a la moral y a las
        buenas costumbres (pornográficos, violentos, racistas, etc.); (II)
        induzcan o puedan inducir en el Usuario la falsa concepción de que
        Urbatek Ceramics S.A.U suscribe, respalda, se adhiere o de cualquier
        manera apoya, las ideas, manifestaciones o expresiones, lícitas o
        ilícitas, del remitente; (III) resulten inapropiados o no pertinentes
        con la actividad de Urbatek Ceramics S.A.U en atención al lugar,
        contenidos y temática de la página Web del remitente.
      </p>
      <p>
        Igualmente, el Usuario se abstendrá de incluir en la página Web
        cualquier hiperenlace (en adelante, “link”) dirigido a una página Web
        que contenga información o contenidos ilícitos, contrarios a la moral y
        buenas costumbres generalmente aceptadas, y al orden público.
      </p>
      <p>
        El establecimiento del Hiperenlace no implica en ningún caso la
        existencia de relaciones entre Urbatek Ceramics S.A.U y el propietario
        del sitio o de la página web en la que se establezca el Hiperenlace, ni
        la aceptación o aprobación por parte Urbatek Ceramics S.A.U de sus
        contenidos o servicios.
      </p>
      <p>
        En todo caso, Urbatek Ceramics S.A.U se reserva el derecho de prohibir o
        inutilizar en cualquier momento cualquier hiperenlace a la Web,
        especialmente en los supuestos de ilicitud de la actividad o contenidos
        del sitio web en el que se incluye el hiperenlace.
      </p>
      <p>
        Urbatek Ceramics S.A.U no ofrece ni comercializa por sí ni por medio de
        terceros la información, contenidos y servicios disponibles en los
        Sitios Enlazados, ni aprueba, supervisa o controla en modo alguno los
        contenidos y servicios y cualquier material de cualquier naturaleza
        existente en los mismos, asumiendo el Usuario de manera exclusiva toda
        la responsabilidad de la navegación a través de los mismos.
      </p>
      <H5 className="mt-2">2.4. Propiedad intelectual e industrial.</H5>{" "}
      <p>
        La estructura, diseño y forma de presentación de los elementos
        disponibles en la presente web (gráficos, imágenes, fotografías,
        muestras y materiales que aparecen en los mismos, tecnologías
        industriales, ficheros, logotipos, combinaciones de colores y cualquier
        elemento susceptible de protección) están protegidos por derechos de
        propiedad intelectual e industrial titularidad de Urbatek Ceramics S.A.U
        o sobre los que se han obtenido los derechos de uso correspondientes.
      </p>
      <p>
        Está prohibida la reproducción, transformación, distribución,
        comunicación pública, puesta a disposición del público y, en general,
        cualquier otra forma de explotación, parcial o total de los elementos
        referidos en el apartado anterior. Su publicación en otras páginas web o
        en otros medios de comunicación digitales o escritos requiere el
        consentimiento expreso del titular de la web, y, en todo caso, deberán
        hacer referencia explícita a la titularidad de los citados derechos de
        propiedad intelectual de Urbatek Ceramics S.A.U. No se permite la
        utilización de los signos distintivos (marcas, nombres comerciales),
        salvo autorización expresa de los legítimos titulares.
      </p>
      <p>
        Salvo autorización expresa de Urbatek Ceramics S.A.U, no se permite el
        enlace a “páginas finales”, el “frame” y cualquier otra manipulación
        similar. Los enlaces deben ser siempre a la página principal o homepage
        del sitio web.
      </p>
      <H4 className="mt-5">3. Ley aplicable y jurisdicción</H4>
      <p>
        Estas Condiciones Generales se rigen por la ley común española y, salvo
        que se establezca otra cosa en la normativa aplicable (incluida la
        normativa de consumidores y usuarios), cualquier conflicto se someterá
        por las partes por los jueces y tribunales de Vila-real, Castellón
        (España).
      </p>
      <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-flow-row gap-6 items-center my-6 text-justify">
        <H5 className="mt-2 col-span-2 text-center">
          Protección de datos de carácter personal
        </H5>
        <p className="font-bold">Responsable del tratamiento</p>
        <div className="flex flex-col items-center gap-1">
          <p>Urbatek Ceramics S.A.U</p>
          <p className="text-center">
            Carretera Nacional 340, Km. 56,2 de 12540 Vila-real (Castellón),
            España
          </p>{" "}
          <p>Tel: 964 525 200</p>
          <A href="https://www.urbatek.com">www.urbatek.com</A>
        </div>

        <p className="font-bold">Finalidad del tratamiento</p>
        <div className="flex flex-col items-center gap-1">
          <p>
            Mantener la relación comercial establecida, así como la de
            mantenerle informado mediante comunicaciones comerciales
            electrónicas sobre nuestros productos y servicios.
          </p>
        </div>

        <p className="font-bold">Plazo de conservación</p>
        <div className="flex flex-col items-center gap-1">
          <p>
            Por un lado la información contable y fiscal será{" "}
            <strong>
              <em>mantenida durante los plazos</em>
            </strong>{" "}
            requeridos para cumplimiento de obligaciones legales.
          </p>
          <p>
            En relación con el envío de publicidad podremos conservar dicha
            información y remitirle publicidad mientras no se oponga a ello.
          </p>
        </div>

        <p className="font-bold">Legitimación</p>
        <div className="flex flex-col items-center gap-1">
          <p>
            Existencia de una relación contractual, interés legítimo y
            consentimiento, según cada finalidad y posible cesión.
          </p>
        </div>

        <p className="font-bold">
          Destinatarios de los datos (cesiones o transferencias)
        </p>
        <ul className="pl-3 list-disc list-inside flex flex-col gap-3">
          <li>
            Los datos podrán ser cedidos a empresas del Grupo cuando lo autorice
            para recibir publicidad.
          </li>
          <li>
            Las empresas que componen el Grupo Porcelanosa se relacionan en los
            siguientes enlaces:{" "}
            <A href="www.porcelanosa.com/empresas.php">
              www.porcelanosa.com/empresas.php
            </A>{" "}
            y
            <A href="www.porcelanosa.com/buscador-de-tiendas.php">
              www.porcelanosa.com/buscador-de-tiendas.php
            </A>
          </li>
          <li>
            Los datos podrán ser cedidos o comunicados, en su caso, a entidades
            bancarias para la realización de cobros o pagos, así como a
            requerimiento de Administraciones Públicas, Juzgados o Tribunales.
          </li>
          <li>
            Los datos podrán ser cedidos a las demás mercantiles del Grupo cuyas
            actividades se relacionen con el producto adquirido.
          </li>
        </ul>

        <p className="font-bold">DPO/DPD</p>
        <div className="flex flex-col items-center gap-1">
          <p>
            Puede dirigirse al Delegado de protección de datos del Grupo
            PORCELANOSA bien remitiendo un email a la siguiente dirección:{" "}
            <A href={`mailto:dpo@porcelanosagrupo.com`}>
              dpo@porcelanosagrupo.com
            </A>{" "}
            o llamando por teléfono al Tel: 964 507 140
          </p>
        </div>

        <p className="font-bold">Derechos</p>
        <div className="flex flex-col items-center gap-1">
          <p>
            Ud. podrá ejercitar los derechos de Acceso, Rectificación,
            Cancelación, Portabilidad, Supresión o, en su caso, Oposición. Para
            ejercitar los derechos deberá presentar un escrito en la dirección
            arriba señalada.
          </p>
          <p>
            Deberá especificar cuál de estos derechos solicita sea satisfecho y,
            a su vez, deberá acompañarse de la fotocopia del DNI o documento
            identificativo equivalente. En caso de que actuara mediante
            representante, legal o voluntario, deberá aportar también documento
            que acredite la representación y documento identificativo del mismo.
          </p>
          <p>
            Asimismo, podrá ejercer su derecho a la protección de datos
            personales, interponiendo reclamación ante la Agencia Española de
            Protección de Datos (<A href="www.agpd.es">www.agpd.es</A>).
          </p>
        </div>
      </div>
      <p>
        <strong>Acerca de la utilización de las “cookies”</strong>
      </p>
      <p>
        Las “cookies” son pequeños archivos de texto enviados y almacenados en
        los ordenadores de los usuarios que permiten a la página Web reconocer a
        los usuarios repetidos, facilitar acceso a la página y permitir
        recopilar información para mejorar el contenido.
      </p>
      <p>
        Las “cookies” utilizadas por PORCELANOSA GRUPO AIE no proporcionan datos
        personales de los usuarios, ni pueden asociarse a una persona. Si el
        usuario no quiere que las “cookies” sean accesibles en esta página Web,
        puede desactivar de su ordenador la instalación de “cookies” mediante la
        configuración personal de su navegador. Para más información, consulte
        la ayuda de su navegador.
      </p>
      <p>
        © Copyright {new Date().getFullYear()} Urbatek Ceramics S.A.U. Prohibida
        su reproducción total o parcial. Reservados todos los derechos.
      </p>
    </div>
  );
};

export default React.memo(NotaLegal);
