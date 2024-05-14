<?php
include("conexao.php");


				    

if (isset($_POST["enviar"])) {
	if (!empty($_POST['g-recaptcha-response'])) {
		$url = "https://www.google.com/recaptcha/api/siteverify";
		$secret = "6Le65twoAAAAABJ15bpALkrtL58Couc80kRfdG6c";
		$response = $_POST['g-recaptcha-response'];
		$variaveis = "secret=".$secret."&response=".$response;

		$ch = curl_init($url);
		curl_setopt( $ch, CURLOPT_POST, 1);
		curl_setopt( $ch, CURLOPT_POSTFIELDS, $variaveis);
		curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
		curl_setopt( $ch, CURLOPT_HEADER, 0);
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
		$resposta = curl_exec($ch);
		$resultado = json_decode($resposta);

		if ($resultado->success == 1) {

			$nome = $_POST["nome"];                            
			$email = $_POST["email"];
			$mensagem = $_POST["mensagem"];

			// Inserção dos dados no banco de dados
			$sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES (?,?,?)";
			$stmt = $conn ->prepare($sql);
			$stmt -> bind_param("sss", $nome, $email, $mensagem);


			if ($stmt->execute()) {
				echo '<script>';
				echo 'alert("Message sent. Thanks!");';
				echo 'window.location.href = "https://ericssongomes.com/";';
				echo '</script>';
				} else {
					echo '<script>';
					echo 'alert("Error sending your message. Please, stop crying and try again, or contact us directly at the email or phone number provided.");';
					echo 'window.location.href = "https://ericssongomes.com/";';
					echo '</script>';
				}
		} else {
			echo '<script>';
			echo 'alert("Captcha Error. Please, Try again");';
			echo 'window.location.href = "https://ericssongomes.com/";';
			echo '</script>';
		}



	} else {		
		echo '<script>';
		echo 'alert("You need to schedule the validation.");';
		echo 'window.location.href = "https://ericssongomes.com/";';
		echo '</script>';
	}
}
$conn->close();


?>